using AutoMapper;
using CoralTime.BL.Helpers;
using CoralTime.BL.Interfaces;
using CoralTime.Common.Exceptions;
using CoralTime.DAL.ConvertModelToView;
using CoralTime.DAL.ConvertViewToModel;
using CoralTime.DAL.Models;
using CoralTime.DAL.Repositories;
using CoralTime.ViewModels.Tasks;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouTrackSharp;
using YouTrackSharp.Issues;
using YouTrackSharp.TimeTracking;

namespace CoralTime.BL.Services
{
    public class IssuesService : BaseService, Interfaces.IIssuesService
    {
        private readonly IConfiguration _configuration;

        public IssuesService(UnitOfWork uow, IMapper mapper, IConfiguration configuration) 
            : base(uow, mapper)
        {
            _configuration = configuration;
        }

        public IEnumerable<IssueView> GetIssues(int takeAmount = 5000)
        {
            if (string.IsNullOrEmpty(Uow.MemberCurrent.BearerToken))
            {
                throw new CoralTimeYouTrackException($"Bearer token is null or empty");
            }

            var connection = new BearerTokenConnection(_configuration["YouTrack:Server"], Uow.MemberCurrent.BearerToken);
            var issuesService = connection.CreateIssuesService();
            var issues = issuesService.GetIssues(take: takeAmount).Result;

            return issues.Select(Mapper.Map<Issue, IssueView>);
        }

        public void UpdateIssue(TimeEntry timeEntry, int time)
        {
            if (timeEntry == null)
                throw new CoralTimeYouTrackException("TimeEntry is empty!");

            var connection = GetConnection();
            var timeService = connection.CreateTimeTrackingService();
            var issueService = connection.CreateIssuesService();

            // 1 minute is minimum value for youtrack
            if (time < 60)
            {
                time = 60;
            }

            var workItem = new WorkItem
            {
                Date = timeEntry.Date,
                Duration = new TimeSpan(0, 0, time),
                Description = timeEntry.Description,
                Updated = DateTime.Now
            };

            if (!string.IsNullOrEmpty(timeEntry.WorkItemId))
            {
                timeService.UpdateWorkItemForIssue(timeEntry.IssueId, timeEntry.WorkItemId, workItem);
            }
            else
            {
                timeEntry.WorkItemId = timeService.CreateWorkItemForIssue(timeEntry.IssueId, workItem).Result;
            }

            var issue = issueService.GetIssue(timeEntry.IssueId).Result;

            foreach (var field in issue.Fields)
            {
                if (field != null && field.Name.Equals("Estimation"))
                {
                    // YouTrack is counting in minutes
                    timeEntry.TimeEstimated = field.AsInt32() * 60;
                }
            }
        }

        public void DeleteIssue(TimeEntry timeEntry)
        {
            if (timeEntry == null)
                throw new CoralTimeYouTrackException("TimeEntry is empty!");

            var connection = GetConnection();
            var timeService = connection.CreateTimeTrackingService();

            timeService.DeleteWorkItemForIssue(timeEntry.IssueId, timeEntry.WorkItemId);
        }

        private BearerTokenConnection GetConnection()
        {
            if (string.IsNullOrEmpty(Uow.MemberCurrent.BearerToken))
            {
                throw new CoralTimeYouTrackException($"Bearer token is empty");
            }

            return new BearerTokenConnection(_configuration["YouTrack:Server"], Uow.MemberCurrent.BearerToken);
        }
    }
}
using CoralTime.DAL.Models;
using CoralTime.ViewModels.Tasks;
using System.Collections.Generic;

namespace CoralTime.BL.Interfaces
{
    public interface IIssuesService
    {
        IEnumerable<IssueView> GetIssues(int takeAmount = 5000);

        void UpdateIssue(TimeEntry timeEntry, int time);

        void DeleteIssue(TimeEntry timeEntry);
    }
}
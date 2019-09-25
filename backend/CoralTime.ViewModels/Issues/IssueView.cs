using System.ComponentModel.DataAnnotations;

namespace CoralTime.ViewModels.Tasks
{
    public class IssueView
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public string ProjectName { get; set; }
    }
}
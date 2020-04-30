using System;
using System.Collections.Generic;
using System.Text;

namespace PropMaint.Common.Models
{
    public class Person
    {
        public Guid UId { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string OtherNames { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PictureUri { get; set; }
    }
}

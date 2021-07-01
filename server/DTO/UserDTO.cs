using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class UserDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdentityUser { get; set; }
        public string Gendor { get; set; }
        public string HMO { get; set; }
        public Nullable<int> NumChildren { get; set; }
        public Nullable<System.DateTime> BornDate { get; set; }
    }
}

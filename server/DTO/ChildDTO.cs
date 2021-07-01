using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ChildDTO
    {

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdentityUser { get; set; }
        public Nullable<System.DateTime> BornDate { get; set; }
        public Nullable<int> IdParent { get; set; }
    }
}

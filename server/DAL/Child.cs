//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Child
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdentityUser { get; set; }
        public Nullable<System.DateTime> BornDate { get; set; }
        public Nullable<int> IdParent { get; set; }
    
        public virtual User User { get; set; }
        public virtual User User1 { get; set; }
    }
}
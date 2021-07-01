using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class ChildDal
    {
        public static IEnumerable<Child> GetChildren()
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                return ctx.Children.ToList();
            }
        }

        public static Child GetChild(int id)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                return ctx.Children.Single(u => u.Id == id);
            }
        }


        public static void AddChild(Child child)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                ctx.Children.Add(child);
                ctx.SaveChanges();
            }
        }

        public static void Update(int id, Child child)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                Child userToUpdate = ctx.Children.Where(u => u.Id == id).FirstOrDefault();

                userToUpdate.Id = child.Id;
                userToUpdate.FirstName = child.FirstName;
                userToUpdate.LastName = child.LastName;
                userToUpdate.BornDate = child.BornDate;
                userToUpdate.IdParent = child.IdParent;
            }
        }
    }
}

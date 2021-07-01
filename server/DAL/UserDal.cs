using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class UserDal
    {
        
        public static IEnumerable<User> GetUsers()
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                return ctx.Users.ToList();
            }
        }

        public static User GetUser(int id)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                return ctx.Users.Single(u => u.Id == id);
            }
        }

        public static void AddUser(User user)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
                ctx.Users.Add(user);
                ctx.SaveChanges();
            }
        }

        public static void Update(int id, User user)
        {
            using (CityBookDBEntities ctx = new CityBookDBEntities())
            {
               User userToUpdate= ctx.Users.Where(u => u.Id == id).FirstOrDefault();
               
                userToUpdate.Id = user.Id;
                userToUpdate.FirstName = user.FirstName;
                userToUpdate.LastName = user.LastName;
                userToUpdate.BornDate = user.BornDate;
                userToUpdate.NumChildren = user.NumChildren;
                userToUpdate.IdentityUser = user.IdentityUser;
                userToUpdate.HMO = user.HMO;
            }
        }
    }
}

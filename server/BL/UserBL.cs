using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.Conversions;
using DAL;

namespace BL
{
   public class UserBL
    {
        public static IEnumerable<UserDTO> GetUsers()
        {
             var list = UserDal.GetUsers().ToList();

             foreach (var item in list)
             {
                 yield return ConvertUser.ConvertToDTO(item);

             }
           /* List<UserDTO> list = new List<UserDTO>();
            list.Add(new UserDTO() { FirstName = "chaim", LastName = "Coen", BornDate = new DateTime(), Gendor = "male", HMO = "Macabi", Id = 1, IdentityUser = "323054338", NumChildren = 2 });
            return list;
            */


        }

        public static UserDTO GetUser(int id)
        {
            return ConvertUser.ConvertToDTO(UserDal.GetUser(id));
            //    .ConvertToDTO(UserDal.GetUser(id));
        }

        public static void AddUser(UserDTO user)
        {
            UserDal.AddUser(ConvertUser.ConvertToEntity(user));
        }

        public static void UpdateUser(int id, UserDTO user)
        {
            UserDal.Update(id, ConvertUser.ConvertToEntity(user));
        }
    }
}

using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.Conversions;

namespace BL
{
   public class ChildBL
    {
        public static IEnumerable<ChildDTO> GetChildren()
        {
            var list = ChildDal.GetChildren().ToList();

            foreach (var item in list)
            {
                yield return ConvertChild.ConvertToDTO(item);

            }
        }



        public static ChildDTO GetChild(int id)
        {
            return ConvertChild.ConvertToDTO(ChildDal.GetChild(id));
            //    .ConvertToDTO(UserDal.GetUser(id));
        }

        public static void AddChild(ChildDTO child)
        {
            ChildDal.AddChild(ConvertChild.ConvertToEntity(child));
        }

        //public static void UpdateUser(int id, UserDTO user)
        //{
        //    UserDal.Update(id, ConvertUser.ConvertToEntity(user));
        //}
    }
}

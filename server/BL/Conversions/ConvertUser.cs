using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Conversions
{
    public class ConvertUser 
    {
        public static UserDTO ConvertToDTO(User entity)
        {
            UserDTO user = new UserDTO()
            {
                Id = entity.Id,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Gendor = entity.Gendor,
                HMO = entity.HMO,
                NumChildren = entity.NumChildren,
                BornDate= entity.BornDate
            };
            return user;
        }

        public static User ConvertToEntity(UserDTO dto)
        {
            User user = new User()
            {
                Id = dto.Id,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Gendor = dto.Gendor,
                HMO = dto.HMO,
                NumChildren = dto.NumChildren,
                BornDate = dto.BornDate
            };
            return user;
        }
    }
}

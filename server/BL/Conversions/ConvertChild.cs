using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL.Conversions
{
    class ConvertChild
    {
        public static ChildDTO ConvertToDTO(Child entity)
        {
            ChildDTO child = new ChildDTO()
            {
                Id = entity.Id,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                BornDate = entity.BornDate,
                IdParent = entity.IdParent
            };
            return child;
        }

        public static Child ConvertToEntity(ChildDTO dto)
        {
            Child child = new Child()
            {
                Id = dto.Id,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                BornDate = dto.BornDate,
                IdParent= dto.IdParent
            };
            return child;
        }
    }
}

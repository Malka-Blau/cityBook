using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Conversions
{
    interface IEntity<T, E>
    {
        E ConvertToEntity(T dto);
        T ConvertToDTO(E entity);
    }
}

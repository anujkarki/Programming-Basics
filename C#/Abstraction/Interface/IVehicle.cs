using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.Interface;

internal interface IVehicle
{
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public void StartEngine();
    public void StopEngine();
    public void Accelerate(int speedIncrease);
    public void Brake(int speedDecrease);
}

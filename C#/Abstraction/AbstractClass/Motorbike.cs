using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.AbstractClass;

public class Motorbike : Vehicle
{
    public bool HasSidecar { get; set; }

    public Motorbike(string brand, string model, int year, bool hasSidecar) : base(brand, model, year)
    {
        HasSidecar = hasSidecar;
    }

    public override void StartEngine()
    {
        Console.WriteLine($"{Brand} {Model} motorbike engine started.");
    }

    public override void StopEngine()
    {
        Console.WriteLine($"{Brand} {Model} motorbike engine stopped.");
    }

    public void Wheelie()
    {
        Console.WriteLine("Performing a wheelie!");
    }
}

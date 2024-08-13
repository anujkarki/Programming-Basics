using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.AbstractClass;

public class Car : Vehicle
{
    public int NumDoors { get; set; }

    public Car(string brand, string model, int year, int numDoors) : base(brand, model, year)
    {
        NumDoors = numDoors;
    }

    public override void StartEngine()
    {
        Console.WriteLine($"{Brand} {Model} car engine started.");
    }

    public override void StopEngine()
    {
        Console.WriteLine($"{Brand} {Model} car engine stopped.");
    }

    public void OpenTrunk()
    {
        Console.WriteLine("Car trunk opened.");
    }
}

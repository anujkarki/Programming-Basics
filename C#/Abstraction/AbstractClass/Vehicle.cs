using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.AbstractClass;

public abstract class Vehicle
{
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    protected int Speed { get; set; }

    protected Vehicle(string brand, string model, int year)
    {
        Brand = brand;
        Model = model;
        Year = year;
        Speed = 0;
    }

    public abstract void StartEngine();
    public abstract void StopEngine();

    public virtual void Accelerate(int speedIncrease)
    {
        Speed += speedIncrease;
        Console.WriteLine($"Accelerating. Current speed: {Speed} km/h");
    }

    public virtual void Brake(int speedDecrease)
    {
        Speed = Math.Max(0, Speed - speedDecrease);
        Console.WriteLine($"Braking. Current speed: {Speed} km/h");
    }
}


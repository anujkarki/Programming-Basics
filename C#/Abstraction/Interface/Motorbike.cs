using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.Interface;

public class Motorbike : IVehicle
{
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public bool HasSidecar { get; set; }
    protected int Speed { get; set; }

    public Motorbike(string brand, string model, int year, bool hasSidecar)
    {
        Brand = brand;
        Model = model;
        Year = year;
        Speed = 0;
        HasSidecar = hasSidecar;
    }

    public void Accelerate(int speedIncrease)
    {
        Speed += speedIncrease;
        Console.WriteLine($"Accelerating. Current speed: {Speed} km/h");
    }

    public void Brake(int speedDecrease)
    {
        Speed = Math.Max(0, Speed - speedDecrease);
        Console.WriteLine($"Braking. Current speed: {Speed} km/h");
    }

    public void StartEngine()
    {
        Console.WriteLine($"{Brand} {Model} motorbike engine started.");
    }

    public void StopEngine()
    {
        Console.WriteLine($"{Brand} {Model} motorbike engine stopped.");
    }

    public void Wheelie()
    {
        Console.WriteLine("Performing a wheelie!");
    }
}

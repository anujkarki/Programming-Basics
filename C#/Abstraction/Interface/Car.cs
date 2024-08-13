using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Abstraction.Interface;

public class Car : IVehicle, IVehicleWithTrunk
{
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public int NumDoors { get; set; }
    protected int Speed { get; set; }

    public Car(string brand, string model, int year, int numDoors)
    {
        Brand = brand;
        Model = model;
        Year = year;
        NumDoors = numDoors;
        Speed = 0;
    }

    public void StartEngine()
    {
        Console.WriteLine($"{Brand} {Model} car engine started.");
    }

    public void StopEngine()
    {
        Console.WriteLine($"{Brand} {Model} car engine stopped.");
    }

    public void OpenTrunk()
    {
        Console.WriteLine("Car trunk opened.");
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
}
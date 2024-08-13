Console.WriteLine("Running Interface Demo");
Console.WriteLine(Environment.NewLine);

Abstraction.Interface.Car intfCar = new Abstraction.Interface.Car("Toyota", "Corolla", 2022, 4);
intfCar.StartEngine();
intfCar.Accelerate(15);
intfCar.Accelerate(20);
intfCar.Accelerate(50);
intfCar.Brake(20);
intfCar.Brake(15);
intfCar.Brake(60);
intfCar.StopEngine();
intfCar.OpenTrunk();

Console.WriteLine(Environment.NewLine);

Abstraction.Interface.Motorbike intfMotorbike = new Abstraction.Interface.Motorbike("Harley-Davidson", "Street 750", 2021, false);
intfMotorbike.StartEngine();
intfMotorbike.Accelerate(20);
intfMotorbike.Accelerate(50);
intfMotorbike.Accelerate(50);
intfMotorbike.Wheelie();
intfMotorbike.Brake(20);
intfMotorbike.Brake(15);
intfMotorbike.Brake(100);
intfMotorbike.StopEngine();

Console.WriteLine(Environment.NewLine);
Console.WriteLine("Running Abstarct Class Demo");
Console.WriteLine(Environment.NewLine);

Abstraction.AbstractClass.Car car = new Abstraction.AbstractClass.Car("Toyota", "Corolla", 2022, 4);
car.StartEngine();
car.Accelerate(15);
car.Accelerate(20);
car.Accelerate(50);
car.Brake(20);
car.Brake(15);
car.Brake(60);
car.StopEngine();
car.OpenTrunk();

Console.WriteLine(Environment.NewLine);

Abstraction.AbstractClass.Motorbike motorbike = new Abstraction.AbstractClass.Motorbike("Harley-Davidson", "Street 750", 2021, false);
motorbike.StartEngine();
motorbike.Accelerate(20);
motorbike.Accelerate(50);
motorbike.Accelerate(50);
motorbike.Wheelie();
motorbike.Brake(20);
motorbike.Brake(15);
motorbike.Brake(100);
motorbike.StopEngine();
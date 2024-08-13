| Feature                        | Abstract Class                                      | Interface                                         |
|--------------------------------|----------------------------------------------------|---------------------------------------------------|
| **Definition**                 | A class that cannot be instantiated and can include both abstract methods (without implementation) and concrete methods (with implementation). | A contract that can be implemented by classes or structs, containing method signatures, properties, events, and indexers without any implementation. |
| **Method Implementation**      | Can have both abstract methods (no implementation) and regular methods (with implementation). | Cannot have any method implementations; only method signatures are allowed. |
| **Fields**                     | Can have fields (variables).                       | Cannot have fields.                               |
| **Constructors**               | Can have constructors, which can be called by derived classes. | Cannot have constructors.                         |
| **Multiple Inheritance**       | A class can inherit only one abstract class.       | A class or struct can implement multiple interfaces. |
| **Access Modifiers**           | Members can have different access modifiers (`public`, `protected`, etc.). | All members are implicitly `public` and cannot have any access modifiers. |
| **Use Case**                   | Used when classes share common behavior or state, and you want to provide some default behavior. | Used to define a contract that multiple classes can implement, ensuring that they follow a certain pattern. |
| **Inheritance**                | Derived classes use the `: baseClass` syntax and must implement abstract methods or override virtual ones. | Classes implement interfaces using the `: interfaceName` syntax and must implement all methods and properties defined in the interface. |
| **Versioning**                 | Easier to add new methods with default implementations without breaking existing derived classes. | Adding new members to an interface can break existing implementations unless default interface methods (C# 8.0+) are used. |
| **Example**                    | `abstract class Shape { public abstract double GetArea(); }` | `interface IShape { double GetArea(); }`           |

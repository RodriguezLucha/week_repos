require "byebug"

class Employee
    attr_reader :salary

    def initialize(name, salary, title, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss

        # @boss.employees.push(self)
    end

    def bonus(multiplier)
        bonus = (@salary) * multiplier
    end
end

class Manager < Employee
    attr_reader :employees

    def initialize(name, salary, title, boss)
        super
        @employees = []
    end

    def add_employee(employee)
        employees << employee
    end


    def bonus(multiplier)
        debugger
        total_salary_sub = @employees.reduce(0) do |total, em| 
            
            total + em.salary
            
        end
        total_salary_sub * multiplier
    end

    def get_sub_salary
        # return [] if employees.empty?

        # salaries = []
        # @employees.each do |em|
        #     em.is_a?(Employee)? salaries << em.salary : salaries += (em.get_sub_salary += [self.salary])
        # end
        # salaries
    end
end

if __FILE__ == $PROGRAM_NAME
    ned = Manager.new("Ned", 1000000, "Founder", nil)
    darren = Manager.new("Darren", 78000, "TA Manager", ned)
    
    shawna = Employee.new("Shawna", 12000, "TA", darren)
    david = Employee.new("David", 10000, "TA", darren)


    p darren
    ned.add_employee(darren)
    darren.add_employee(shawna)
    darren.add_employee(david)
    p ned.get_sub_salary

end
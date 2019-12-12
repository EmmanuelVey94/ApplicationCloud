// employeeController.js
// Import employee model
employee = require("./employeeModel");
// Handle index actions
exports.index = function(req, res) {
  employee.get(function(err, employees) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "employees retrieved successfully",
      data: employees
    });
  });
};
// Handle view employee info
exports.requetes1 = function(req, res) {
  employee.find({ Emp_no: req.params.emp_no }, function(err, employee) {
    console.log(employee);
    if (err) res.send(err);
    res.json({
      employee
    });
  });
};

exports.requetes2 = function(req, res) {
  employee.find({ "Dept_emp.Dept_no": req.params.dept_no }, function(
    err,
    employee
  ) {
    if (err) res.send(err);
    res.json({
      employee
    });
  });
};

exports.requetes3 = function(req, res) {
  employee.aggregate(
    [
      { $unwind: "$Salaries" },
      { $unwind: "$Dept_emp" },
      {
        $group: {
          _id: "$Dept_emp.Dept_no",
          nb_employee: { $sum: 1 },
          moyenne_salaire: { $avg: "$Salaries.salary" }
        }
      }
    ],
    function(err, employee) {
      if (err) res.send(err);
      res.json({
        employee
      });
    }
  );
};

exports.requetes4 = function(req, res) {
  employee.aggregate(
    [
      { $unwind: "$Salaries" },
      { $unwind: "$Dept_emp" },
      {
        $group: {
          _id: {
            Dept_emp: "$Dept_emp.Dept_no",
            nb_salarie: { $sum: 1 },
            date: {
              $divide: [
                { $subtract: ["$Salaries.To_date", "$Salaries.From_date"] },
                7889400000
              ]
            }
          }
        }
      }
    ],
    function(err, employee) {
      if (err) res.send(err);
      res.json({
        employee
      });
    }
  );
};

exports.requetes5 = function(req, res) {
  employee.aggregate(
    [
      { $unwind: "$Salaries" },
      { $unwind: "$Titles" },
      { $unwind: "$Dept_emp" },
      {
        $group: {
          _id: { Dept_emp: "$Dept_emp.Dept_no", title: "$Titles.title" },
          temps_moyen: {
            $avg: {
              $divide: [
                { $subtract: ["$Salaries.To_date", "$Salaries.From_date"] },
                7889400000
              ]
            }
          }
        }
      }
    ],
    function(err, employee) {
      if (err) res.send(err);
      res.json({
        employee
      });
    }
  );
};

exports.requetes6 = function(req, res) {
  employee.aggregate(
    [
      { $unwind: "$Salaries" },
      { $unwind: "$Titles" },
      { $unwind: "$Dept_emp" },
      {
        $group: {
          _id: { Dept_emp: "$Dept_emp.Dept_no", title: "$Titles.title" },
          moyenne_salaire: { $avg: "$Salaries.salary" }
        }
      }
    ],
    function(err, employee) {
      if (err) res.send(err);
      res.json({
        employee
      });
    }
  );
};

exports.requetes7 = function(req, res) {
  employee.find({ Emp_no: req.params.emp_no }, function(err, employee) {
    if (err) res.send(err);
    res.json({
      employee
    });
  });
};

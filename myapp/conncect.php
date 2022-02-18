<?php
    if($_SERVER['REQUEST_METHOD']=='POST' && isset ($_POST['submit'])){
        $conn=mysqli_connect('localhost', 'root' , '' , 'wfile') or die("Connection Failed :".mysqli_connect_error());
        if(isset($_POST['name']) && isset($_POST['lname']) && isset($_POST['number']) && isset($_POST['salary']) && isset($_POST['designation'])){
            $name=$_POST['name'];
            $lname=$_POST['lname'];
            $number=$_POST['number'];
            $salary=$_POST['salary'];
            $designation=$_POST['designation'];

            $sql= "INSERT INTO 'users'  (' name', 'lname' ,'number','salary' , 'designation') VALUES('$name' , '$lname' , '$number', '$salary' ,'$designation')";

            $query=mysqli_query($conn,$sql); 
                if($query){
                    echo 'enetr susccessfully';
                }
                else  {
                    echo 'invalid';
                }
        }
    }

?>


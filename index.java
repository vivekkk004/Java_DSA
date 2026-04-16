import java.util.Scanner;

// public class index{
//     public static  void main(String args[]){
//         int age = 22;
//         if (age>=18){
//             System.out.print("audelt: drive,vote");
//         }
//         else {
//             System.out.print("not audelt");
//         }
//     }



    
// }


// public class index{
//     public static  void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         int num = sc.nextInt();

//         if (num %2== 0){
//             System.out.print("even no");
//         }
//         else {
//             System.out.print("odd nu ");
//         }
//     }   
// }
import java.util.Scanner;

// public class index {
//     public static void main(String args[]) {
//         Scanner sc = new Scanner(System.in);

//         System.out.print("Enter income: ");

//         if (sc.hasNextInt()) {
//             int income = sc.nextInt();
//             int tax;

//             if (income < 500000) {
//                 tax = 0;
//             } else if (income < 1000000) {
//                 tax = (int) (income * 0.2);
//             } else if (income < 1500000) {
//                 tax = (int) (income * 0.25);
//             } else {
//                 tax = (int) (income * 0.3);
//             }

//             System.out.println("Tax is " + tax);
//         } else {
//             System.out.println("Please enter only integer value");
//         }

//         sc.close();
//     }
// }


//  

public class index {
    public static void main(String args[]) {

        int a = 1, b = 3, c = 6;

        if ((a > b) && (a >= c)) {
            System.out.println("largest is a");
        } 
        else if (b >= c) {
            System.out.println("largest is b");
        } 
        else {
            System.out.println("largest is c");
        }
    }
}
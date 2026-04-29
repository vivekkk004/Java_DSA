import java.util.*;

public class ParkingSy{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);

    int hours = sc.nextInt();
    
    if(hours<=2){
        System.out.println("your fine is : 100");
    } else if (hours>2 && hours<=5){
         System.out.println("your fine is : 50");
    }
    else if (hours > 5 ){
        System.out.println("your fine is : 20");
    }

    }
}
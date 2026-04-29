import java.util.*;

public class GymMem{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

    int months = sc.nextInt();

    if(months<=0){
        System.out.println("Invalid input");
        
    }
    else if(months<=1){
        System.out.println("Cost:2000");

    }
    else if(months<=3){
        System.out.println("Cost:5000");

    }else if(months<=6){
        System.out.println("Cost:9000");
    }else{
        System.out.println("Cost:15000");
    }

    }
}
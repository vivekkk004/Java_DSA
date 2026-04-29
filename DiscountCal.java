import java.util.*;

public class DiscountCal{

 
    public static void main(String args[]){
     Scanner sc = new Scanner(System.in);
    
    int amount = sc.nextInt();

    if(amount < 1000){
         amount = amount -(amount* 5/100 );
    }
 
     else if (amount > 1000 && amount<5000){
         amount = amount -(amount * 10/100 );

    }else if (amount>5000){
         amount = amount -(amount * 15/100 );
    }

       System.out.println("final amount :"+ amount    );
     
   
} 
}
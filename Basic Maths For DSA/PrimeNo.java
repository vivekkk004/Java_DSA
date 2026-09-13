import java.util.*;
import java.util.Scanner;

public class PrimeNo{
    public static void main(String args[]){

    Scanner sc = new Scanner(System.in);
    System.out.println( "enter no ");
      int n =sc.nextInt(); 

     int cnt = 0;  // time complaxity O(seq(o))

     for(int i = 1 ; i*i< 100 ; i++){
           if(n % i == 0){
            cnt ++;
           }
       if ((n / i) != i){
             cnt ++ ;
           };

       
       
     } 
     
          if(cnt == 2){
              System.out.print(n+" "+" is Prime no ");
           }else{
            System.out.print(n+" "+" is not  Prime no ");
            
           }
      
    }
}
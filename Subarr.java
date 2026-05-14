import java.util.*;


public class Subarr{

    public static void printSubarr(int numbers[]){
         for (int i=0; i<numbers.length; i++){
            int start =i;
            for (int j=i; j<numbers.length; j++){
                int end =j;
                for(int k=start; k<=end; k++){
                    System.out.print(numbers[k]+" ");

                    
                }
                System.out.println();
            }
            System.out.println();
         }
    }
    public static void main(String arr[]){
         int numbers[] = {1,2,3,4,5,6,7,8,9};
         printSubarr(numbers);
    }
}
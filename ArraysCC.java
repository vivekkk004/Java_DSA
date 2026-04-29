import  java.util.*;

public class ArraysCC{

    public static int lenearsearch(int num[],int key){
        for(int i=0; i<num.length; i++){
            if(num[i] == key){
               return i; 
            }
        }
        return-1;
    }
    public static void main(String args[]){
    //   int marks[] =new int[100];

    //   Scanner sc = new Scanner(System.in);

    //   marks[0] = sc.nextInt();
    //   marks[1] = sc.nextInt();
    //   marks[2] = sc.nextInt(); 


    //   System.out.println("phy"+ marks[0]);
    //    System.out.println("chem" + marks[1]);
    //     System.out.println ("math"+ marks[2]);

      int num[] = {1,2,3,4,5,6,7,8,9};

      int key = 5;

   int index =lenearsearch(num,key);

   System.out.println(index);

    }
    
}


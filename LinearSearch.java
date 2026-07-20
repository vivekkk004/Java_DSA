public class LinearSearch{
    public static void main(String args[]){
        int arr[] ={2, 4, 5,3,6};

        int num = 6;

        for (int i=0; i<arr.length; i++){
            if (arr[i]== num){
                System.out.print(i);
                    return;  
            }
        }
         System.out.println("Element not found");
    }
}
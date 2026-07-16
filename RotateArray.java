public class RotateArray{

    public static void RotateArr(int arr[]){
        int frist = 0;
        int last = arr.length-1;

        while(frist<last){
            int temp = arr[frist];
            arr[frist] = arr[last];
            arr[last]=temp;

            frist++;
            last--;
        }
    }
    public static void main(String[] args){
        int arr[] ={ 34, 34, 23, 5 , 89,};
            RotateArr(arr);
           for (int i=0; i<arr.length; i++){
           
            System.out.print(arr[i]+" ");
           }
            System.out.println();
        }
     
    }
    
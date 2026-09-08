public class MoveZerostoEnd{
    public static void main (String args[]){

        int arr [] ={4,3,4,5,0,5,0,1,0,0,2,8};

        int j = -1;

        for( int i =0;i<arr.length;i++){
            if(arr[i]==0){
                j=i;
                break;
            }
        }
        if(j == -1 ){
            System.out.println(arr);
        }

        for(int i = j+1; i<arr.length;i++){
            if(arr[i] != 0){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            
        }

        for (int i =0; i<arr.length; i++){
             System.out.print(arr[i]+ " ");
        }
       

    }
} 
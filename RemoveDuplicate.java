public class RemoveDuplicate{
    public static void main(String args[]){
        int arr [] ={2, 3, 4, 6, 3, 2, 7};
     for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println(arr[i]);
        }
            }
        }
    }
}
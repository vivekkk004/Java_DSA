// public class TwoSum{
//     public static void main(String[] args){
//         int arr[]={2,7,11,15};

//         int target = 9;

//         for(int i=0; i<arr.length; i++){
//             for(int j=i+1; j<arr.length; j++){
//                 if (arr[i]+arr[j]== target){
//                     System.out.println(arr[i]+"+"+arr[j]+"="+target);
//                     return;
//                 }
//             }
//         }
//     }
// }


// Uaing hash map Time: O(n)
import java.util.HashMap;

public class TwoSum{
    public static void main(String[] args){
        int arr[]={2,7,11,15};

        int target = 13;
       
       HashMap<Integer,Integer>map = new HashMap<>();

        for(int i =0; i<arr.length;i++){
            int num = arr[i];
            int moreNeeded = target - num;

            if (map.containsKey(moreNeeded)){
                System.out.println (map.get(moreNeeded)+","+i);
                return;
            }
            map.put(num, i);
        }

       System.out.print("-1,-1");
    }
};
import java.util.*;

public class MaxFreqArr {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {        
            arr[i] = sc.nextInt();
        }

        HashMap<Integer, Integer> map = new HashMap<>(); 

        for (int x : arr) {                              
            map.put(x, map.getOrDefault(x, 0) + 1);     
        }

        int maxFreq = 0;                                  
        int result = Integer.MAX_VALUE;                

        for (int key : map.keySet()) {                  
            int val = map.get(key);

            if (val > maxFreq) {                        
                maxFreq = val;
                result = key;
            } else if (val == maxFreq) {
                result = Math.min(result, key);           
            }
        }

        System.out.println("REsult is :"+ result);
    }
}
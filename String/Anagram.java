import java.util.*;

public class Anagram {
    public static boolean  IsAnagram(String str1 , String str2){
        if (str1.length() != str2.length() ){
            return false;
        };
     
 char[] s1 = str1.toLowerCase().toCharArray();
    char[] s2 = str2.toLowerCase().toCharArray();

    Arrays.sort(s1);
    Arrays.sort(s2);

      return Arrays.equals(s1, s2);
    }
    
    public static void main(String args []){
      String str1  = "Listen";
       String str2 ="Silent";

       if(IsAnagram(str1 ,str2)){
        System.out.println("Is a Anagram");
       }else{
        System.out.println("Is Not Anagram");
       }
    } 
}
public class SubString{
    public static String substr(String str , int si, int ei){
        String substring ="";
        for(int i=si; i<ei; i++){
            substring += str.charAt(i);
        }
        return substring;
    }
    public static void  main(String[]args){
        String str = "vivekmuthe";
        System.out.println(substr(str , 0, 4));
    }
}
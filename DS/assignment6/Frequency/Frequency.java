
/**
 * @class  Frequency
 * @author Pulkit
 * @since  02nd September 15
 * This class defines findFrequency function.
 */
 
 package assignment6;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class Frequency {	
	 private HashMap<String, Integer> cache = new HashMap<String, Integer>();
	 private Set<Character> set = new HashSet<Character>();
	 public int findFrequency(String input) {
			int result = 0;
		
			if (cache.containsKey(input)) {
				return cache.get(input);
			}
			for (int i = 0; i < input.length(); i++) {
				char ch = input.charAt(i);
				set.add(ch);
			}
			result = set.size();
			set.clear();
			cache.put(input, result);
			return result;
	}
}

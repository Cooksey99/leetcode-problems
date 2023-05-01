use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, i32> = HashMap::new();
        let mut result = Vec::new();

        for (i, curr) in nums.iter().enumerate() {
            let check: i32 = target - curr;
            
            if let Some(&exist) = map.get(&check) {
                result.push(exist);
                result.push(i as i32);
            } else {
                map.insert(*curr, i as i32);
            }
        }
        return result
    }
}
/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // 1. Error Handling: Return null if bill is 0/negative 
  // OR if rating is NOT 1, 2, 3, 4, or 5
  if (billAmount <= 0 || serviceRating < 1 || serviceRating > 5 || !Number.isInteger(serviceRating)) {
    return null;
  }

  let tipPercentage;

  // 2. Determine percentage based on rating
  if (serviceRating === 1) {
    tipPercentage = 5;
  } else if (serviceRating === 2) {
    tipPercentage = 10;
  } else if (serviceRating === 3) {
    tipPercentage = 15;
  } else if (serviceRating === 4) {
    tipPercentage = 20;
  } else {
    // Since we validated above, this must be 5
    tipPercentage = 25;
  }

  // 3. Perform calculations
  // We divide tipPercentage by 100 to get the decimal (e.g., 15 -> 0.15)
  const tipAmount = parseFloat((billAmount * (tipPercentage / 100)).toFixed(2));
  const totalAmount = parseFloat((billAmount + tipAmount).toFixed(2));

  return {
    tipPercentage: tipPercentage,
    tipAmount: tipAmount,
    totalAmount: totalAmount
  };
}




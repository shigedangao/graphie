/**
 * From
 *    Convert an object T into an object Y.
 *    This interface is based on the Rust From trait
 *    @link https://doc.rust-lang.org/std/convert/trait.From.html
 */
export interface From<T, Y> {
  /**
   * Convert an object T into an object Y
   * @param input
   */
  from(input: T): Y;
}

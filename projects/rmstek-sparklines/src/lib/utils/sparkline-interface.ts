export interface SparklineInterface {
   // Data is collected via the constructor \
   validate(): void;
   prepare(): void;
   scale(): void;
   draw(): void;
   buildToolTips(): void;
   setToolTips(): void;
}

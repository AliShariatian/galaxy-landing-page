import "./ShimmerBtn.css";

function ShimmerBtn({ text }: { text: string }) {
   return (
      <main className="shimmer-main">
         <button className="shimmer-btn">
            <span className="text">{text}</span>
            <span className="shimmer"></span>
         </button>
      </main>
   );
}

export default ShimmerBtn;

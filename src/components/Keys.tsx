export default function Keys(props: any) {
  return (
    <div onClick={() => props.handler(props.num)} className={props.classname}>
      {props.num === "*" ? "x" : props.num}
    </div>
  );
}

export const PaymentMethods = (props) => {

  const handleClickCheck = () => {
    props.changeCheck(props.value)
  }


    return (
        <>
            <form className="mt-5 grid gap-6" >
              <div className="relative" onClick={handleClickCheck}>
                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked={props.selected} />
                <span className={`${props.selected === true ? 'peer-checked:border-primaryColor' : null }  absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white`} />
                <label className={`${props.selected === true? 'peer-checked:border-primaryColor' : null} peer-checked:border-2  peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4`} htmlFor="radio_2" >
                  <div>
                    <span className="mt-2 font-semibold flex flex-wrap">
                  {props.text}
                  {props.icon ?
                      <img className="w-7 object-contain" src={props.icon} alt="" />
                  :null}
                    </span>
                  </div>
                </label>
              </div>
            </form>
        </>
    )
}
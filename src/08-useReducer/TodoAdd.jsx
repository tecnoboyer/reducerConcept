

export const TodoAdd = () => {
  return (
    <form>
    <input
      type="text"
      placeholder="Que hay que hacer?"
      className="form-control"
    />
    <botton
      type="submit"
      className="btn btn-outline-primary mt-1"
    >
      Agregar</botton>
  </form>
  )
}

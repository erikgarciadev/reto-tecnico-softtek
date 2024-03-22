import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { updateUser } from "../../slices/homeSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { useAppSelector } from "../../app/hooks";

interface Inputs {
  dni: string;
  phoneNumber: string;
  acceptPrivacity: boolean;
  acceptComunication: boolean;
}

const FormInformation = () => {
  const user = useAppSelector((state) => state.home.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    setValue("dni", user?.dni ?? "");
    setValue("phoneNumber", user?.phoneNumber ?? "");
    setValue("acceptComunication", user?.acceptComunication ?? false);
    setValue("acceptPrivacity", user?.acceptPrivacity ?? false);
  }, [user]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!user) return;
    const { dni, acceptComunication, acceptPrivacity, phoneNumber } = data;
    const dataUser = {
      ...user,
      acceptPrivacity,
      acceptComunication,
      dni,
      phoneNumber,
    };
    dispatch(updateUser(dataUser));
    navigate(PATHS.PLANS);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__container_title">
        <div>
          <Badge>Seguro Salud Flexible</Badge>
          <h1>Creado para ti y tu familia</h1>
        </div>
        <picture>
          <img width="136px" height="160px" src="./images/family-mobile.webp" />
        </picture>
      </div>
      <p className="form__instructions">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </p>

      <div className="input-select">
        <select>
          <option>DNI</option>
        </select>
        <Input
          {...register("dni", { required: true })}
          border={false}
          label="Nro. de documento"
        />
      </div>
      {errors.dni ? <p className="error">Requerido</p> : null}
      <div className="form-container-input">
        <Input
          {...register("phoneNumber", { required: true })}
          label="Celular"
        />
        {errors.phoneNumber ? <p className="error">Requerido</p> : null}
      </div>

      <div className="container-checkbox-error">
        <div className="container-checkbox">
          <Controller
            control={control}
            name="acceptPrivacity"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
              />
            )}
          ></Controller>
          <label>Acepto la Política de Privacidad</label>
        </div>
        {errors.acceptPrivacity ? <p className="error">Requerido</p> : null}
      </div>
      <div>
        <div className="container-checkbox-error">
          <div className="container-checkbox">
            <Controller
              control={control}
              name="acceptComunication"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  onChange={(e) => onChange(e.target.checked)}
                  checked={value}
                />
              )}
            ></Controller>
            <label>Acepto la Política Comunicaciones Comerciales</label>
          </div>
          {errors.acceptComunication ? (
            <p className="error">Requerido</p>
          ) : null}
        </div>
      </div>

      <p className="form__terms">Aplican Términos y Condiciones.</p>

      <Button type="submit">Cotiza aquí</Button>
    </form>
  );
};

export default FormInformation;

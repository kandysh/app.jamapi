import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { checkUsername } from '../api/apiAuth';
import { ErrorDiv, LoginButton, LoginFormInput } from '../utils/formStyles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
const Login = () => {
	const schema = z
		.object({
			username: z.string().min(4, { message: 'Must be 4 or more characters' }),
			email: z.string().email({ message: 'Invalid email Address' }),
			password: z.string().min(6, { message: 'Must be 6 or more characters' }),
			cpassword: z.string().min(6, { message: 'Must be 6 or more characters' }),
		})
		.superRefine(async ({ cpassword, password }, ctx) => {
			if (cpassword !== password) {
				ctx.addIssue({
					path: ['cpassword'],
					code: z.ZodIssueCode.custom,
					message: "The password don't match",
				});
			}
		});
	const { register, handleSubmit, formState } = useForm<NewUserData>({
		resolver: zodResolver(schema),
	});
	const [invalidUsername, setInvalidUsername] = useState<boolean>(false);
	const onSubmit = handleSubmit((data) => {
		checkUsername(data.username)
			.then((res) => {
				if (res.respone) setInvalidUsername(true);
			})
			.catch((err) => console.log(err));
	});
	const { errors } = formState;
	return (
		// const [userData,setUserData] =
		<div style={{ justifyContent: 'center', display: 'flex' }}>
			<div
				style={{
					margin: '0',
					padding: '0',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				{formState.defaultValues && <ErrorDiv>
					<ul>
						<li>{invalidUsername?'Username already exists':''}</li>
						<li>{errors.username?.message}</li>
						<li>{errors.email?.message}</li>
						<li>{errors.password?.message}</li>
						<li>{errors.cpassword?.message}</li>
					</ul>
				</ErrorDiv>}
			</div>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					background: '#fafafa',
					width: '50%',
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: '2rem',
				}}
				onSubmit={onSubmit}
			>
				<div
					style={{
						fontSize: '1.5rem',
						fontWeight: '600',
						marginTop: '10%',
						marginBottom: '10%',
						color: '#5c728a',
						font: 'Roboto',
						justifySelf: 'center',
					}}
				>
					Sign up to Jamdb
				</div>
				<LoginFormInput placeholder="Email" {...register('email')} />

				<LoginFormInput placeholder="Username" {...register('username')} />
				<LoginFormInput
					placeholder="Password"
					{...register('password')}
					type="password"
				/>
				<LoginFormInput
					placeholder="Confirm Password"
					type="password"
					{...register('cpassword')}
				/>
				<LoginButton type="submit">Submit</LoginButton>
			</form>
		</div>
	);
};

export default Login;

import { memo } from 'react';
import cls from './ProductDetails.module.scss';
import { useSelector } from 'react-redux';
import {
	getProductDetailsData,
	getProductDetailsError,
	getProductDetailsIsLoading,
} from '../../model/selectors/productDetailsSelectors/productDetailsSelectors';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Flex, VStack } from '@/shared/ui/Stack';

interface ProductDetailsProps {
	className?: string;
}

export const ProductDetails = memo((props: ProductDetailsProps) => {
	const { className } = props;
	const product = useSelector(getProductDetailsData);
	const isLoading = useSelector(getProductDetailsIsLoading);
	const error = useSelector(getProductDetailsError);
	const { id } = useParams<{ id: string }>();
	// const { renderProductBlock } = useProductDetails(id, cls);

	if (!id) return null;

	if (isLoading) {
		return (
			<VStack max gap='16' justify={'center'} className={classNames('', {}, [className])}>
				<Flex max justify='center' align='center'>
					<Skeleton width={200} height={200} borderRadius='50%' />
				</Flex>
				<Skeleton width={300} height={32} />
				<Skeleton width={600} height={24} />
				<Skeleton width={'100%'} height={200} />
				<Skeleton width={'100%'} height={200} />
			</VStack>
		);
	}

	if (error) {
		return <div>Произошла ошибка при загрузке статьи</div>;
	}

	return (
		<VStack
			max
			gap='16'
			className={classNames(cls.productDetails, {}, [className])}
			data-testid='ProductDetails'
		>
			{/* <AppImage
						src={product?.img}
						className={cls.preview}
						data-testid='ProductDetails.Image'
					/>
					<VStack max gap='8'>
						<Text
							title={product?.title}
							text={product?.subtitle}
							size='size_l'
							data-testid='ProductDetails.Titles'
						/>
						<HStack gap='8' align='center'>
							<Icon Svg={EyeIcon} />
							<Text
								text={String(product?.views)}
								size='size_m'
								data-testid='ProductDetails.Views'
							/>
						</HStack>
						<HStack gap='8' align='center'>
							<Icon Svg={CalendarIcon} />
							<Text
								text={product?.createdAt}
								size='size_m'
								data-testid='ProductDetails.CreatedAt'
							/>
						</HStack>
					</VStack>
					{product?.blocks.map(renderProductBlock)} */}
			detail
		</VStack>
	);
});

import { memo } from 'react';
import { PageMainContent } from '@/widgets/PageMainContent';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetails, getProductDetailsData, getProductDetailsError } from '@/entities/Product';
import { StickyContentLayout } from '@/shared/layouts';
import cls from './ProductDetailsPage.module.scss';
import classNames from 'classnames';
import { VStack } from '@/shared/ui/Stack';

export const ProductDetailsPage = memo(() => {
	const error = useSelector(getProductDetailsError);
	const { id } = useParams<{ id: string }>();
	const product = useSelector(getProductDetailsData);

	if (!id) return null;

	return (
		<StickyContentLayout
			content={
				<PageMainContent className={classNames('', {}, [])}>
					<VStack gap='16' className={cls.productDetails}>
						<div>
							<ProductDetails />
						</div>
					</VStack>
				</PageMainContent>
			}
		/>
	);
});

/* 

import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductCommentsList } from '@/features/ProductCommentsList';
import { PageMainContent } from '@/widgets/PageMainContent';
import { ProductRecommendations } from '@/features/ProductRecommendations';
import { ProductDetails, getProductDetailsError } from '@/features/ProductDetails';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/components/Stack';
import { ProductRating } from '@/features/productRating';
import { useParams } from 'react-router-dom';
import { ToggleFeatures, getFeatureFlag, toggleFeatures } from '@/shared/lib/featureFlags';
import { Counter } from '@/entities/Counter';
import { Card } from '@/shared/components/Card';

export const ProductDetailsPage = memo(() => {
	const { t } = useTranslation('product-details');
	const error = useSelector(getProductDetailsError);
	const { id } = useParams<{ id: string }>();
	const isProductRatingEnabled = getFeatureFlag('isProductRatingEnabled');
	const isCounterEnabled = getFeatureFlag('isCounterEnabled');

	if (!id) return null;

	const productRatingCard = toggleFeatures({
		name: 'isProductRatingEnabled',
		on: () => <ProductRating productId={id} />,
		off: () => <Card max>{t('Оценка статей скоро появится!')}</Card>,
	});

	toggleFeatures({
		name: 'isProductRatingEnabled',
		on: () => console.log('ONN'),
		off: () => console.log('OFF'),
	});

	return (
		<PageMainContent className={classNames('', {}, [])}>
			<VStack gap='16' max>
				<ProductDetails />
				{!error && (
					<>
						{isCounterEnabled && <Counter />}
						<ToggleFeatures
							name='isProductRatingEnabled'
							on={<ProductRating productId={id} />}
							off={productRatingCard && <ProductRating productId={id} />}
						/>
						<ToggleFeatures
							name={'isProductRatingEnabled'}
							on={
								<div>
									<div>{productRatingCard}</div>
								</div>
							}
							off={productRatingCard}
						/>
						<ToggleFeatures
							name='isCounterEnabled'
							on={<ProductRating productId={id} />}
							off={<Card max>{t('Оценка статей скоро появится!')}</Card>}
						/>
						<ProductRecommendations />
						<ProductCommentsList />
					</>
				)}
			</VStack>
		</PageMainContent>
	);
});


*/

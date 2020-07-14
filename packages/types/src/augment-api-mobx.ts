// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import { AnyNumber, ITuple } from '@polkadot/types/types';
import { Option, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, bool, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, CurrencyId, ExtrinsicsWeight, FixedI128, Hash, IdentityDepositBalanceOf, KeyTypeId, LiquidityPoolId, MarginPoolOption, MarginPoolTradingPairOption, MarginPosition, MarginTradingPairOption, Moment, OracleKey, Perbill, Permill, Pool, PositionId, PositionsSnapshot, Releases, SwapRate, SyntheticPoolCurrencyOption, SyntheticPosition, SyntheticTokensRatio, TradingPair, TradingPairRiskThreshold, ValidatorId } from '@laminar/types/interfaces/runtime';
import { OrderedSet, TimestampedValueOf } from '@open-web3/orml-types/interfaces/oracle';
import { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { Proposal } from '@polkadot/types/interfaces/democracy';
import { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import { IdentityInfo } from '@polkadot/types/interfaces/identity';
import { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import { ActiveEraInfo, ElectionResult, ElectionScore, ElectionStatus, EraIndex, EraRewardPoints, Exposure, Forcing, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { AccountInfo, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import { OpenTip } from '@polkadot/types/interfaces/treasury';
import { Multiplier } from '@polkadot/types/interfaces/txpayment';
import { Multisig } from '@polkadot/types/interfaces/utility';
import { BaseStorageType, StorageDoubleMap, StorageMap } from '@open-web3/api-mobx';

export interface StorageType extends BaseStorageType {
  babe: {    /**
     * Current epoch authorities.
     **/
    authorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>;
    /**
     * Current slot number.
     **/
    currentSlot: u64;
    /**
     * Current epoch index.
     **/
    epochIndex: u64;
    /**
     * The slot at which the first epoch actually started. This is 0
     * until the first block of the chain.
     **/
    genesisSlot: u64;
    /**
     * Temporary value (cleared at block finalization) which is `Some`
     * if per-block initialization has already been called for current block.
     **/
    initialized: Option<MaybeRandomness>;
    /**
     * How late the current block is compared to its parent.
     * 
     * This entry is populated as part of block execution and is cleaned up
     * on block finalization. Querying this storage entry outside of block
     * execution context should always yield zero.
     **/
    lateness: BlockNumber;
    /**
     * Next epoch configuration, if changed.
     **/
    nextEpochConfig: Option<NextConfigDescriptor>;
    /**
     * Next epoch randomness.
     **/
    nextRandomness: Randomness;
    /**
     * The epoch randomness for the *current* epoch.
     * 
     * # Security
     * 
     * This MUST NOT be used for gambling, as it can be influenced by a
     * malicious validator in the short term. It MAY be used in many
     * cryptographic protocols, however, so long as one remembers that this
     * (like everything else on-chain) it is public. For example, it can be
     * used where a number is needed that cannot have been chosen by an
     * adversary, for purposes such as public-coin zero-knowledge proofs.
     **/
    randomness: Randomness;
    /**
     * Randomness under construction.
     * 
     * We make a tradeoff between storage accesses and list length.
     * We store the under-construction randomness in segments of up to
     * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     * Once a segment reaches this length, we begin the next one.
     * We reset all segments and return to `0` at the beginning of every
     * epoch.
     **/
    segmentIndex: u32;
    /**
     * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     **/
    underConstruction: StorageMap<u32 | AnyNumber | Uint8Array, Vec<Randomness>>;
  };
  balances: {    /**
     * The balance of an account.
     * 
     * NOTE: This is only used in the case that this module is used to store balances.
     **/
    account: StorageMap<AccountId | string | Uint8Array, AccountData>;
    /**
     * Any liquidity locks on some account balances.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageMap<AccountId | string | Uint8Array, Vec<BalanceLock>>;
    /**
     * Storage version of the pallet.
     * 
     * This is set to v2.0.0 for new networks.
     **/
    storageVersion: Releases;
    /**
     * The total units issued in the system.
     **/
    totalIssuance: Balance;
  };
  baseLiquidityPoolsForMargin: {    /**
     * Identity info of liquidity pools: `(identity_info, deposit_amount, is_verified)`.
     * 
     * Returns `None` if identity info of the pool not set or removed.
     **/
    identityInfos: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, Option<ITuple<[IdentityInfo, IdentityDepositBalanceOf, bool]>>>;
    /**
     * Next available liquidity pool ID.
     **/
    nextPoolId: LiquidityPoolId;
    /**
     * Liquidity pool information.
     * 
     * Returns `None` if no such pool exists.
     **/
    pools: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, Option<Pool>>;
  };
  baseLiquidityPoolsForSynthetic: {    /**
     * Identity info of liquidity pools: `(identity_info, deposit_amount, is_verified)`.
     * 
     * Returns `None` if identity info of the pool not set or removed.
     **/
    identityInfos: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, Option<ITuple<[IdentityInfo, IdentityDepositBalanceOf, bool]>>>;
    /**
     * Next available liquidity pool ID.
     **/
    nextPoolId: LiquidityPoolId;
    /**
     * Liquidity pool information.
     * 
     * Returns `None` if no such pool exists.
     **/
    pools: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, Option<Pool>>;
  };
  financialCouncil: {    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: Vec<AccountId>;
    /**
     * The member who provides the default vote for any other members that do not vote before
     * the timeout. If None, then no member has that privilege.
     **/
    prime: Option<AccountId>;
    /**
     * Proposals so far.
     **/
    proposalCount: u32;
    /**
     * Actual proposal for a given hash, if it's current.
     **/
    proposalOf: StorageMap<Hash | string | Uint8Array, Option<Proposal>>;
    /**
     * The hashes of the active proposals.
     **/
    proposals: Vec<Hash>;
    /**
     * Votes on a given proposal, if it is ongoing.
     **/
    voting: StorageMap<Hash | string | Uint8Array, Option<Votes>>;
  };
  financialCouncilMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId>;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId>;
  };
  generalCouncil: {    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: Vec<AccountId>;
    /**
     * The member who provides the default vote for any other members that do not vote before
     * the timeout. If None, then no member has that privilege.
     **/
    prime: Option<AccountId>;
    /**
     * Proposals so far.
     **/
    proposalCount: u32;
    /**
     * Actual proposal for a given hash, if it's current.
     **/
    proposalOf: StorageMap<Hash | string | Uint8Array, Option<Proposal>>;
    /**
     * The hashes of the active proposals.
     **/
    proposals: Vec<Hash>;
    /**
     * Votes on a given proposal, if it is ongoing.
     **/
    voting: StorageMap<Hash | string | Uint8Array, Option<Votes>>;
  };
  generalCouncilMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId>;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId>;
  };
  grandpa: {    /**
     * The number of changes (both in terms of keys and underlying economic responsibilities)
     * in the "set" of Grandpa validators from genesis.
     **/
    currentSetId: SetId;
    /**
     * next block number where we can force a change.
     **/
    nextForced: Option<BlockNumber>;
    /**
     * Pending change: (signaled at, scheduled change).
     **/
    pendingChange: Option<StoredPendingChange>;
    /**
     * A mapping from grandpa set ID to the index of the *most recent* session for which its
     * members were responsible.
     * 
     * TWOX-NOTE: `SetId` is not under user control.
     **/
    setIdSession: StorageMap<SetId | AnyNumber | Uint8Array, Option<SessionIndex>>;
    /**
     * `true` if we are currently stalled.
     **/
    stalled: Option<ITuple<[BlockNumber, BlockNumber]>>;
    /**
     * State of the current authority set.
     **/
    state: StoredState;
  };
  indices: {    /**
     * The lookup from index to account.
     **/
    accounts: StorageMap<AccountIndex | AnyNumber | Uint8Array, Option<ITuple<[AccountId, BalanceOf, bool]>>>;
  };
  marginLiquidityPools: {    /**
     * The accumulated swap rate of trading pairs in liquidity pools.
     **/
    accumulatedSwapRates: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, TradingPair | { base?: any; quote?: any } | string | Uint8Array, SwapRate>;
    /**
     * The default minimum leveraged amount allowed to open a position.
     **/
    defaultMinLeveragedAmount: Balance;
    /**
     * The last time swap rate was accumulated.
     **/
    lastAccumulateTime: Moment;
    /**
     * Liquidity pool options, managed by pool owner.
     **/
    poolOptions: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, MarginPoolOption>;
    /**
     * Trading pair options in a liquidity pool.
     * 
     * Getter is implemented manually to cap the spread with max spread.
     **/
    poolTradingPairOptions: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, TradingPair | { base?: any; quote?: any } | string | Uint8Array, MarginPoolTradingPairOption>;
    /**
     * Trading pair options.
     **/
    tradingPairOptions: StorageMap<TradingPair | { base?: any; quote?: any } | string | Uint8Array, MarginTradingPairOption>;
  };
  marginProtocol: {    /**
     * Balance of a trader in a liquidity pool.
     * 
     * The balance value could be positive or negative:
     * - If positive, it represents 'balance' the trader could use to open positions, withdraw etc.
     * - If negative, it represents how much the trader owns the pool. Owning could happen when realizing loss.
     * but trader has not enough free margin at the moment; Then repayment would be done while realizing profit.
     **/
    balances: StorageDoubleMap<AccountId | string | Uint8Array, LiquidityPoolId | AnyNumber | Uint8Array, FixedI128>;
    /**
     * Margin call pool.
     * 
     * New positions may only be opened in a pool if which not in margin called state.
     **/
    marginCalledPools: StorageMap<LiquidityPoolId | AnyNumber | Uint8Array, Option<ITuple<[]>>>;
    /**
     * Margin call check of a trader in a pool.
     * 
     * A trader may only open new positions if not in margin called state.
     **/
    marginCalledTraders: StorageDoubleMap<AccountId | string | Uint8Array, LiquidityPoolId | AnyNumber | Uint8Array, Option<ITuple<[]>>>;
    /**
     * Next available position ID.
     **/
    nextPositionId: PositionId;
    /**
     * Positions.
     **/
    positions: StorageMap<PositionId | AnyNumber | Uint8Array, Option<MarginPosition>>;
    /**
     * Positions existence check by pools and trading pairs.
     **/
    positionsByPool: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, ITuple<[TradingPair, PositionId]> | [TradingPair | { base?: any; quote?: any } | string | Uint8Array, PositionId | AnyNumber | Uint8Array], Option<ITuple<[]>>>;
    /**
     * Positions existence check by traders and liquidity pool IDs.
     **/
    positionsByTrader: StorageDoubleMap<AccountId | string | Uint8Array, ITuple<[LiquidityPoolId, PositionId]> | [LiquidityPoolId | AnyNumber | Uint8Array, PositionId | AnyNumber | Uint8Array], Option<ITuple<[]>>>;
    /**
     * Positions snapshots.
     * 
     * Used for performance improvement.
     **/
    positionsSnapshots: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, TradingPair | { base?: any; quote?: any } | string | Uint8Array, PositionsSnapshot>;
    /**
     * Risk thresholds of a trading pair, including trader risk threshold, pool ENP and ELL risk threshold.
     * 
     * DEFAULT-NOTE: `trader`, `enp`, and `ell` are all `None` by default.
     **/
    riskThresholds: StorageMap<TradingPair | { base?: any; quote?: any } | string | Uint8Array, TradingPairRiskThreshold>;
  };
  multisig: {    calls: StorageMap<U8aFixed | string | Uint8Array, Option<ITuple<[Bytes, AccountId, BalanceOf]>>>;
    /**
     * The set of open multisig operations.
     **/
    multisigs: StorageDoubleMap<AccountId | string | Uint8Array, U8aFixed | string | Uint8Array, Option<Multisig>>;
  };
  offences: {    /**
     * A vector of reports of the same kind that happened at the same time slot.
     **/
    concurrentReportsIndex: StorageDoubleMap<Kind | string | Uint8Array, OpaqueTimeSlot | string | Uint8Array, Vec<ReportIdOf>>;
    /**
     * Deferred reports that have been rejected by the offence handler and need to be submitted
     * at a later time.
     **/
    deferredOffences: Vec<DeferredOffenceOf>;
    /**
     * The primary structure that holds all offence records keyed by report identifiers.
     **/
    reports: StorageMap<ReportIdOf | string | Uint8Array, Option<OffenceDetails>>;
    /**
     * Enumerates all reports of a kind along with the time they happened.
     * 
     * All reports are sorted by the time of offence.
     * 
     * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     * different types are not supported at the moment so we are doing the manual serialization.
     **/
    reportsByKindIndex: StorageMap<Kind | string | Uint8Array, Bytes>;
  };
  operatorMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId>;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId>;
  };
  oracle: {    /**
     * If an oracle operator has feed a value in this block
     **/
    hasDispatched: OrderedSet;
    /**
     * True if Self::values(key) is up to date, otherwise the value is stale
     **/
    isUpdated: StorageMap<OracleKey | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, bool>;
    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: OrderedSet;
    nonces: StorageMap<AccountId | string | Uint8Array, u32>;
    /**
     * Raw values for each oracle operators
     **/
    rawValues: StorageDoubleMap<AccountId | string | Uint8Array, OracleKey | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, Option<TimestampedValueOf>>;
    /**
     * Session key for oracle operators
     **/
    sessionKeys: StorageMap<AccountId | string | Uint8Array, Option<AuthorityId>>;
    /**
     * Combined value, may not be up to date
     **/
    values: StorageMap<OracleKey | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, Option<TimestampedValueOf>>;
  };
  palletTreasury: {    /**
     * Proposal indices that have been approved but not yet awarded.
     **/
    approvals: Vec<ProposalIndex>;
    /**
     * Number of proposals that have been made.
     **/
    proposalCount: ProposalIndex;
    /**
     * Proposals that have been made.
     **/
    proposals: StorageMap<ProposalIndex | AnyNumber | Uint8Array, Option<Proposal>>;
    /**
     * Simple preimage lookup from the reason's hash to the original data. Again, has an
     * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     **/
    reasons: StorageMap<Hash | string | Uint8Array, Option<Bytes>>;
    /**
     * Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     * This has the insecure enumerable hash function since the key itself is already
     * guaranteed to be a secure hash.
     **/
    tips: StorageMap<Hash | string | Uint8Array, Option<OpenTip>>;
  };
  randomnessCollectiveFlip: {    /**
     * Series of block headers from the last 81 blocks that acts as random seed material. This
     * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     * the oldest hash.
     **/
    randomMaterial: Vec<Hash>;
  };
  session: {    /**
     * Current index of the session.
     **/
    currentIndex: SessionIndex;
    /**
     * Indices of disabled validators.
     * 
     * The set is cleared when `on_session_ending` returns a new set of identities.
     **/
    disabledValidators: Vec<u32>;
    /**
     * The owner of a key. The key is the `KeyTypeId` + the encoded key.
     **/
    keyOwner: StorageMap<ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array], Option<ValidatorId>>;
    /**
     * The next session keys for a validator.
     **/
    nextKeys: StorageMap<ValidatorId | string | Uint8Array, Option<Keys>>;
    /**
     * True if the underlying economic identities or weighting behind the validators
     * has changed in the queued validator set.
     **/
    queuedChanged: bool;
    /**
     * The queued keys for the next session. When the next session begins, these keys
     * will be used to determine the validator's session keys.
     **/
    queuedKeys: Vec<ITuple<[ValidatorId, Keys]>>;
    /**
     * The current set of validators.
     **/
    validators: Vec<ValidatorId>;
  };
  staking: {    /**
     * The active era information, it holds index and start.
     * 
     * The active era is the era currently rewarded.
     * Validator set of this era must be equal to `SessionInterface::validators`.
     **/
    activeEra: Option<ActiveEraInfo>;
    /**
     * Map from all locked "stash" accounts to the controller account.
     **/
    bonded: StorageMap<AccountId | string | Uint8Array, Option<AccountId>>;
    /**
     * A mapping from still-bonded eras to the first session index of that era.
     * 
     * Must contains information for eras for the range:
     * `[active_era - bounding_duration; active_era]`
     **/
    bondedEras: Vec<ITuple<[EraIndex, SessionIndex]>>;
    /**
     * The amount of currency given to reporters of a slash event which was
     * canceled by extraordinary circumstances (e.g. governance).
     **/
    canceledSlashPayout: BalanceOf;
    /**
     * The current era index.
     * 
     * This is the latest planned era, depending on how the Session pallet queues the validator
     * set, it might be active or not.
     **/
    currentEra: Option<EraIndex>;
    /**
     * The earliest era for which we have a pending, unapplied slash.
     **/
    earliestUnappliedSlash: Option<EraIndex>;
    /**
     * Flag to control the execution of the offchain election. When `Open(_)`, we accept
     * solutions to be submitted.
     **/
    eraElectionStatus: ElectionStatus;
    /**
     * Rewards for the last `HISTORY_DEPTH` eras.
     * If reward hasn't been set or has been removed then 0 reward is returned.
     **/
    erasRewardPoints: StorageMap<EraIndex | AnyNumber | Uint8Array, EraRewardPoints>;
    /**
     * Exposure of validator at era.
     * 
     * This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     * If stakers hasn't been set or has been removed then empty exposure is returned.
     **/
    erasStakers: StorageDoubleMap<EraIndex | AnyNumber | Uint8Array, AccountId | string | Uint8Array, Exposure>;
    /**
     * Clipped Exposure of validator at era.
     * 
     * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     * `T::MaxNominatorRewardedPerValidator` biggest stakers.
     * (Note: the field `total` and `own` of the exposure remains unchanged).
     * This is used to limit the i/o cost for the nominator payout.
     * 
     * This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     * If stakers hasn't been set or has been removed then empty exposure is returned.
     **/
    erasStakersClipped: StorageDoubleMap<EraIndex | AnyNumber | Uint8Array, AccountId | string | Uint8Array, Exposure>;
    /**
     * The session index at which the era start for the last `HISTORY_DEPTH` eras.
     **/
    erasStartSessionIndex: StorageMap<EraIndex | AnyNumber | Uint8Array, Option<SessionIndex>>;
    /**
     * The total amount staked for the last `HISTORY_DEPTH` eras.
     * If total hasn't been set or has been removed then 0 stake is returned.
     **/
    erasTotalStake: StorageMap<EraIndex | AnyNumber | Uint8Array, BalanceOf>;
    /**
     * Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     * This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     **/
    erasValidatorPrefs: StorageDoubleMap<EraIndex | AnyNumber | Uint8Array, AccountId | string | Uint8Array, ValidatorPrefs>;
    /**
     * The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     * Eras that haven't finished yet or has been removed doesn't have reward.
     **/
    erasValidatorReward: StorageMap<EraIndex | AnyNumber | Uint8Array, Option<BalanceOf>>;
    /**
     * Mode of era forcing.
     **/
    forceEra: Forcing;
    /**
     * Number of eras to keep in history.
     * 
     * Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     * Must be more than the number of eras delayed by session otherwise. I.e. active era must
     * always be in history. I.e. `active_era > current_era - history_depth` must be
     * guaranteed.
     **/
    historyDepth: u32;
    /**
     * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     * easy to initialize and the performance hit is minimal (we expect no more than four
     * invulnerables) and restricted to testnets.
     **/
    invulnerables: Vec<AccountId>;
    /**
     * True if the current **planned** session is final. Note that this does not take era
     * forcing into account.
     **/
    isCurrentSessionFinal: bool;
    /**
     * Map from all (unlocked) "controller" accounts to the info regarding the staking.
     **/
    ledger: StorageMap<AccountId | string | Uint8Array, Option<StakingLedger>>;
    /**
     * Minimum number of staking participants before emergency conditions are imposed.
     **/
    minimumValidatorCount: u32;
    /**
     * The map from nominator stash key to the set of stash keys of all validators to nominate.
     **/
    nominators: StorageMap<AccountId | string | Uint8Array, Option<Nominations>>;
    /**
     * All slashing events on nominators, mapped by era to the highest slash value of the era.
     **/
    nominatorSlashInEra: StorageDoubleMap<EraIndex | AnyNumber | Uint8Array, AccountId | string | Uint8Array, Option<BalanceOf>>;
    /**
     * Where the reward payment should be made. Keyed by stash.
     **/
    payee: StorageMap<AccountId | string | Uint8Array, RewardDestination>;
    /**
     * The next validator set. At the end of an era, if this is available (potentially from the
     * result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     * is executed.
     **/
    queuedElected: Option<ElectionResult>;
    /**
     * The score of the current [`QueuedElected`].
     **/
    queuedScore: Option<ElectionScore>;
    /**
     * Slashing spans for stash accounts.
     **/
    slashingSpans: StorageMap<AccountId | string | Uint8Array, Option<SlashingSpans>>;
    /**
     * The percentage of the slash that is distributed to reporters.
     * 
     * The rest of the slashed value is handled by the `Slash`.
     **/
    slashRewardFraction: Perbill;
    /**
     * Snapshot of nominators at the beginning of the current election window. This should only
     * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     **/
    snapshotNominators: Option<Vec<AccountId>>;
    /**
     * Snapshot of validators at the beginning of the current election window. This should only
     * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     **/
    snapshotValidators: Option<Vec<AccountId>>;
    /**
     * Records information about the maximum slash of a stash within a slashing span,
     * as well as how much reward has been paid out.
     **/
    spanSlash: StorageMap<ITuple<[AccountId, SpanIndex]> | [AccountId | string | Uint8Array, SpanIndex | AnyNumber | Uint8Array], SpanRecord>;
    /**
     * True if network has been upgraded to this version.
     * Storage version of the pallet.
     * 
     * This is set to v3.0.0 for new networks.
     **/
    storageVersion: Releases;
    /**
     * All unapplied slashes that are queued for later.
     **/
    unappliedSlashes: StorageMap<EraIndex | AnyNumber | Uint8Array, Vec<UnappliedSlash>>;
    /**
     * The ideal number of staking participants.
     **/
    validatorCount: u32;
    /**
     * The map from (wannabe) validator stash key to the preferences of that validator.
     **/
    validators: StorageMap<AccountId | string | Uint8Array, ValidatorPrefs>;
    /**
     * All slashing events on validators, mapped by era to the highest slash proportion
     * and slash value of the era.
     **/
    validatorSlashInEra: StorageDoubleMap<EraIndex | AnyNumber | Uint8Array, AccountId | string | Uint8Array, Option<ITuple<[Perbill, BalanceOf]>>>;
  };
  sudo: {    /**
     * The `AccountId` of the sudo key.
     **/
    key: AccountId;
  };
  syntheticLiquidityPools: {    /**
     * Maximum spread of a currency.
     **/
    maxSpread: StorageMap<CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, Option<Balance>>;
    /**
     * Minimum additional collateral ratio.
     **/
    minAdditionalCollateralRatio: Permill;
    /**
     * Currency options in a liquidity pool.
     **/
    poolCurrencyOptions: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, SyntheticPoolCurrencyOption>;
  };
  syntheticTokens: {    /**
     * Positions of a currency in a pool
     **/
    positions: StorageDoubleMap<LiquidityPoolId | AnyNumber | Uint8Array, CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, SyntheticPosition>;
    /**
     * Ratios for each currency.
     **/
    ratios: StorageMap<CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, SyntheticTokensRatio>;
  };
  system: {    /**
     * The full account information for a particular account ID.
     **/
    account: StorageMap<AccountId | string | Uint8Array, AccountInfo>;
    /**
     * Total length (in bytes) for all extrinsics put together, for the current block.
     **/
    allExtrinsicsLen: Option<u32>;
    /**
     * Map of block numbers to block hashes.
     **/
    blockHash: StorageMap<BlockNumber | AnyNumber | Uint8Array, Hash>;
    /**
     * The current weight for the block.
     **/
    blockWeight: ExtrinsicsWeight;
    /**
     * Digest of the current block, also part of the block header.
     **/
    digest: DigestOf;
    /**
     * The number of events in the `Events<T>` list.
     **/
    eventCount: EventIndex;
    /**
     * Events deposited for the current block.
     **/
    events: Vec<EventRecord>;
    /**
     * Mapping between a topic (represented by T::Hash) and a vector of indexes
     * of events in the `<Events<T>>` list.
     * 
     * All topic vectors have deterministic storage locations depending on the topic. This
     * allows light-clients to leverage the changes trie storage tracking mechanism and
     * in case of changes fetch the list of events of interest.
     * 
     * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     * the `EventIndex` then in case if the topic has the same contents on the next block
     * no notification will be triggered thus the event might be lost.
     **/
    eventTopics: StorageMap<Hash | string | Uint8Array, Vec<ITuple<[BlockNumber, EventIndex]>>>;
    /**
     * The execution phase of the block.
     **/
    executionPhase: Option<Phase>;
    /**
     * Total extrinsics count for the current block.
     **/
    extrinsicCount: Option<u32>;
    /**
     * Extrinsics data for the current block (maps an extrinsic's index to its data).
     **/
    extrinsicData: StorageMap<u32 | AnyNumber | Uint8Array, Bytes>;
    /**
     * Extrinsics root of the current block, also part of the block header.
     **/
    extrinsicsRoot: Hash;
    /**
     * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     **/
    lastRuntimeUpgrade: Option<LastRuntimeUpgradeInfo>;
    /**
     * The current block number being processed. Set by `execute_block`.
     **/
    number: BlockNumber;
    /**
     * Hash of the previous block.
     **/
    parentHash: Hash;
  };
  timestamp: {    /**
     * Did the timestamp get updated in this block?
     **/
    didUpdate: bool;
    /**
     * Current time for the current block.
     **/
    now: Moment;
  };
  tokens: {    /**
     * The balance of a token type under an account.
     * 
     * NOTE: If the total is ever zero, decrease account ref account.
     * 
     * NOTE: This is only used in the case that this module is used to store balances.
     **/
    accounts: StorageDoubleMap<AccountId | string | Uint8Array, CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, AccountData>;
    /**
     * Any liquidity locks of a token type under an account.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageDoubleMap<AccountId | string | Uint8Array, CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, Vec<BalanceLock>>;
    /**
     * The total issuance of a token type.
     **/
    totalIssuance: StorageMap<CurrencyId | 'LAMI'|'AUSD'|'FEUR'|'FJPY'|'FBTC'|'FETH'|'FAUD'|'FCAD'|'FCHF'|'FXAU'|'FOIL'|'FGBP' | number | Uint8Array, Balance>;
  };
  transactionPayment: {    nextFeeMultiplier: Multiplier;
    storageVersion: Releases;
  };
  utility: {  };
}

<fieldset id="ldapWizard2">

	<div>
		<p>
			<?php p($l->t('Limit the access to ownCloud to users meeting this criteria:'));?>
		</p>

		<p>
			<label for="ldap_userfilter_objectclass">
				<?php p($l->t('only those object classes:'));?>
			</label>

			<select id="ldap_userfilter_objectclass" multiple="multiple"
			 name="ldap_userfilter_objectclass"
			 data-default="<?php p($_['ldap_userfilter_objectclass_default']); ?>">
			</select>
		</p>

		<p>
			<label for="ldap_userfilter_groups">
				<?php p($l->t('only from those groups:'));?>
			</label>

			<select id="ldap_userfilter_groups" multiple="multiple"
			 name="ldap_userfilter_groups"
			 data-default="<?php p($_['ldap_userfilter_groups_default']); ?>">
			</select>
		</p>

		<p>
			<label><a id='toggleRawUserFilter'>↓ <?php p($l->t('Edit raw filter instead'));?></a></label>
		</p>

		<p id="rawUserFilterContainer" class="invisible">
			<input type="text" id="ldap_userlist_filter" name="ldap_userlist_filter"
			class="lwautosave"
			data-default="<?php p($_['ldap_userlist_filter_default']); ?>"
			placeholder="<?php p($l->t('Raw LDAP filter'));?>"
			title="<?php p($l->t('The filter specifies which LDAP users shall have access to the ownCloud instance.'));?>"
			/>
		</p>

		<p>
			<div class="ldapWizardInfo invisible">&nbsp;</div>
		</p>

		<p>
			<span id="ldap_user_count">0</span> <span><?php p($l->t('user(s) found'));?></span>
		</p>
		<?php print_unescaped($_['wizardControls']); ?>
	</div>
</fieldset>